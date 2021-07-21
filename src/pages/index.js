import Head from 'next/head'
import { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import  {retrieveChampions} from '../ducks/championsSlice';

export default function Home() {
  const dispatch = useDispatch();
  const {items: champions, isLoading, isError} = useSelector(state => state.champions);

  useEffect( async ()=>{
    dispatch(retrieveChampions())
    
  },[dispatch])

  if (isLoading){
    return <p>Carregando...</p>
  }
  if (isError){
    return <p>Erro ao carregar...</p>
  }

  return (
    <ul>
      {champions.map(champion => {
        return <li key={champion.key}>{champion.name}</li>
      })}
    </ul>
  )
}
