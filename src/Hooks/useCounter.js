import { useDispatch, useSelector } from "react-redux"
import { decreaseCounter, increaseCounter } from "../store/slices/counter"

export function useCounter(){

    let counter = useSelector((state) => state.counter.counter)
    const dispatch = useDispatch()


    const decrease=() => {

        dispatch(decreaseCounter())

    }

    const increase=() => {

        dispatch(increaseCounter())

    }

    return [counter , decrease, increase]

}