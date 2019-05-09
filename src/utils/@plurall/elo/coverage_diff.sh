#!/usr/bin/awk -f
BEGIN {}
{
delta=$1-$2;
if (delta < 0)
  result="Decreasing Coverage in: "delta;
else if (delta == 0)
  result="No changes in coverage!: "delta;
else
  result="Increasing Coverage in: "delta" YAY!!!";
print result
}
END {}
