import { useSelector, useDispatch } from "react-redux"; // modelo redux
import './Middle.css'

import {
    atualizaBill, atualizaTip, atualizaNPeople,
    atualizaTipByPerson, atualizaTotalByPerson
} from "./store";

import CustomTip from "./components/CustomTip";
import { useState } from "react";
import Footer from "./components/Footer";

function Middle() {
    const dispatch = useDispatch() // dispatch dispara a action definida no store
    const seletor: any = useSelector(state => state) // traz o estado definido no store do redux

    const [warning, setWarning] = useState("")
    const [stateTotalBill, setTotalBill] = useState(0)
    const [stateTip, setTip] = useState(0)
    const [stateNPeople, setNPeople] = useState(1)

    let size = seletor.totalbill.length - 1 // pega o tamanho do total de estados
    let lastTotalBill = seletor.totalbill[size].totalbill
    let sizeb = seletor.tip.length - 1 // pega o tamanho do total de estados
    let lastTip = seletor.tip[sizeb].tip
    let sizec = seletor.npeople.length - 1 // pega o tamanho do total de estados
    let lastNPeople = seletor.npeople[sizec].npeople
    let varTipByPerson = ((lastTotalBill * (lastTip / 100)) / lastNPeople).toFixed(2)
    let varTotalByPerson = (((lastTotalBill * (lastTip / 100) + (+lastTotalBill)) / lastNPeople)).toFixed(2)

    function atualizaCampoTotalBill(a: any) {   // 142,55
        setTotalBill(a)
        setTimeout(() => { dispatch(atualizaBill({ totalbill: a })) }, 2000);
    }

    function atualizaCampoCustomTip(b: any) {    // 15 %
        setTip(b)
        setTimeout(() => { dispatch(atualizaTip({ tip: b })) }, 2000);
    }

    function atualizaCampoNPeople(c: any) {     // 5 npeople
        setNPeople(c)
        setTimeout(() => {
            if (c == 0) {
                setWarning("Can't be zero")
            } else {
                setWarning("")
                dispatch(atualizaNPeople({ npeople: c }))
            }
        }, 2000)
    }

    // zera tudo
    function zeraTotalBill() {
        dispatch(atualizaBill({ totalbill: 0 })); setTotalBill(0)
        dispatch(atualizaTip({ tip: 0 })); setTip(0)
        dispatch(atualizaNPeople({ npeople: 1 })); setNPeople(1)
        dispatch(atualizaTipByPerson({ tipbyperson: 0 }))
        dispatch(atualizaTotalByPerson({ totalbyperson: 0 }))
    }

    return (
        <>
            <div className="container">
                <div className="tituloprincipal">
                    <h3>SPLI <br /> TTER</h3>
                </div>
                <div className="secaoumedois">
                    <div className="secaoum">
                        <div className="bill">
                            <label htmlFor="totalbill" className='titulosecaoum'>Bill</label>
                            <input type="number" name="totalbill" id="totalbill" className="totalbill"
                                value={stateTotalBill}
                                onChange={(e) => { atualizaCampoTotalBill(e.target.value) }} />
                        </div>

                        <div className="tip">
                            <label htmlFor="tips" className='titulosecaoum'>Select Tip %</label>
                            <div className="botoes">
                                <CustomTip valor={5} />
                                <CustomTip valor={10} />
                                <CustomTip valor={15} />
                                <CustomTip valor={25} />
                                <CustomTip valor={50} />
                                <input type="number" name="tips" id="fieldcampotip" className="fieldcampotip"
                                    value={stateTip}
                                    onChange={(e) => { atualizaCampoCustomTip(e.target.value) }} />
                            </div>
                        </div>

                        <div className="npeople">
                            <div className="labelewarning">
                                <label htmlFor="numberofpeople" className='titulosecaoum'>Number of People</label>
                                <small> {warning} </small>
                            </div>
                            <input type="number" name="numberofpeople" id="numberofpeople" className="fieldnpeople"
                                value={stateNPeople}
                                onChange={(e) => { atualizaCampoNPeople(e.target.value) }}
                            />
                        </div>

                    </div>
                    <div className="secaodois">
                        <div className="tipbyperson">
                            <div>
                                <h3>Tip Amount</h3>
                                <small> / person </small>
                            </div>
                            <h1> ${varTipByPerson}</h1>
                        </div>
                        <div className="totalbyperson">
                            <div>
                                <h3>Total</h3>
                                <small> / person </small>
                            </div>
                            <h1> ${varTotalByPerson}</h1>
                        </div>

                        <button className="reset" onClick={zeraTotalBill}>Reset</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Middle;