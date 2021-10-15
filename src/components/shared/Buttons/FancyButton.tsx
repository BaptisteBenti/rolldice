import { createUseStyles } from 'react-jss'

export interface IProps {
  children: React.ReactNode
  onClick: () => void
}

const useStyles = createUseStyles({
  Button: {
    backgroundColor: '#1155CC',
    color: 'white',
    padding: '1rem',
    margin: ['1rem', '.5rem'],
    fontSize: "1.1rem",
    textTransform: "uppercase",
    border: 'none',
    borderRadius: '.4rem',
    '&:hover': {
      backgroundColor : '#2370CB',
      cursor: 'pointer',
    }
  }
})

const Button = ( props: IProps ) => {
  const classes = useStyles()
  return (
    <button
      className={ classes.Button }
      onClick={ props.onClick }
    >
      { props.children }
    </button>
  )
}

export default Button