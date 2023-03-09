import { useDispatch } from "react-redux";
import { atualizaTip } from "../store";
import './CustomTip.css'

export interface ICustomTipProps {
  valor: number
}
// const [estadoCep, setEstadoCep] = useState(  { cepInicial: 90010140 }  )

export default function CustomTip(props: ICustomTipProps) {
  const dispatch = useDispatch() // só dispatch
 
  function dispatchPropsValor(e: any) {   
    dispatch(atualizaTip({ tip: e }))
  }
  
  return (
      <button id="botaotip" className="botaotip" onClick={(e) => { dispatchPropsValor(props.valor) }}>
        {props.valor}%
      </button>
  );
}
