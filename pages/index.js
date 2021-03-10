import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getCoinList} from '../store/actions/coinActions'
import ReactPaginate from "react-paginate";
import _ from "lodash";

export default function Home() {

  const dispatch = useDispatch();
  const {data} = useSelector(state=>state.coinList)


  useEffect(() => {
    FetchData(1);
  }, [])

    const FetchData = (page = 1) => {
        dispatch(getCoinList(page))
    }


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          {data && data.map(coin => (
              <h1 key={coin.id}>{coin.name}</h1>
          ))}

          {!_.isEmpty(data) && (
              <ReactPaginate
                  pageCount={data.count}
                  pageRangeDisplayed={2}
                  marginPagesDisplayed={1}
                  onPageChange={(data) => FetchData(data.selected + 1)}
                  containerClassName={"pagination"}
              />
          )}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
