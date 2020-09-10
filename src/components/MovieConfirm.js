import React from 'react'
import styles from './styles'
import { updateMovieList } from '../redux/moviesReducer'
import { connect } from 'react-redux'

const MovieConfirm = props => {
  const { title, poster, rating } = props
  const confirmMovie = () => {
    props.updateMovieList({ title, poster, rating })
    props.history.push('/list')
  }

  console.log(props)

  return (
    <div style={styles.container}>
      <p style={styles.containerHeading}>CONFIRM YOUR DETAILS</p>
      <p style={styles.confirmText}>{`${title} - ${rating}`}</p>
      <img src={`${poster}`} alt="Movie Poster" />
      <div>
        <button
          onClick={() => props.history.push('/')}
          style={styles.formButton}
        >
          BACK
        </button>
        <button onClick={confirmMovie} style={styles.formButton}>
          CONFIRM
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  const { title, poster, rating } = state
  return { title, poster, rating }

}
export default connect(mapStateToProps, { updateMovieList })(MovieConfirm)
