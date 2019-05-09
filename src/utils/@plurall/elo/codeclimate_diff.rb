# encoding: UTF-8

require 'json'

files_to_analyze = ENV['DIFF'].split("\n")

json_report = JSON.parse(File.read('gl-code-quality-report.json'))

issues_to_report = json_report.keep_if do |issue_report|
  files_to_analyze.include? issue_report['location']['path']
end

return if issues_to_report.empty?

formatted_issues = issues_to_report.each_with_object({}) do |issue,hsh|
  p "ISSUE: #{issue}"
  filepath = issue['location']['path']
  hsh[filepath] ||= []
  begin_line = issue.dig('location', 'positions', 'begin', 'line') rescue nil
  begin_line = begin_line || issue.dig('location', 'lines', 'begin') rescue nil
  begin_column = issue.dig('location', 'positions', 'begin', 'column') rescue nil
  description = issue['description']
  engine = issue['engine_name']
  pretty_issue = "Line #{begin_line}, Column #{begin_column}: #{description}  [#{engine}]"
  hsh[filepath] << pretty_issue
end

File.open('pretty_output.txt', 'w') do |output|
  formatted_issues.map do |filename, issues|
    output << "\n== #{filename} (#{issues.length}) issues ==\n"
    issues.each { |i| output << "#{i}\n" }
    output << "\nAnalysis complete! Found #{formatted_issues.values.map(&:count).sum} issues.\n\n"
  end
end
