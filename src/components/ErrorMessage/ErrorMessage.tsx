import * as styles from './ErrorMessage.module.scss'

interface IErrorMessageProps {
  subTitle?: string | null
  title?: string | null
  dataTestId?: string
}

const ErrorMessage = ({
  subTitle,
  title = 'Corremos e voamos, mas não encontramos o que você busca.',
  dataTestId,
}: IErrorMessageProps) => {
  return (
    <div data-test-id={dataTestId} className={styles['no-results']}>
      <div className={styles['title-wrapper']}>
        <h1 data-test-id={`${dataTestId}-title`}>{title}</h1>
      </div>

      {subTitle && <div data-test-id={`${dataTestId}-subtitle`}>{subTitle}</div>}
    </div>
  )
}

export default ErrorMessage
