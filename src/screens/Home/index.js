import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { actions } from "../../store/actions"
import styles from "./index.module.scss" // scoped styling

const Home = () => {
  const dispatch = useDispatch()
  const { quote, loading } = useSelector((state) => state.quote)
  const handleRandomQuote = () => dispatch(actions.GetRandomQuote())

  return (
    <div className={styles.home}>
      <h2 className={styles.heading}>Home</h2>
      <div className={styles.quote}>
        <p style={{color: '#282828'}}>{quote?.content ?? (loading ? "Loading..." : "- - -")}</p>
        <p>{quote?.author ?? (loading ? "Loading..." : "- - -")}</p>
        <button onClick={handleRandomQuote}>Get Random Quote</button>
      </div>
    </div>
  )
}

export default Home
