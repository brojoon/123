"use client"
import Image from 'next/image'
import styles from './page.module.css'
import create from 'zustand'
import useNumberBaseStore  from './hooks/store'

export default function Home() {
  const { numberA, numberB, increaseNumberA, increaseNumberB } = useNumberBaseStore();
  
  return (
   <>
    <h2>numberA : {numberA}</h2>
    <h2>numberB : {numberB}</h2>
    <button onClick={increaseNumberA}>A 증가</button>
    <button onClick={() => increaseNumberB(3)}>B 증가</button>
   </>
  )
}
