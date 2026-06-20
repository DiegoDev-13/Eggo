import { data } from "react-router-dom"
import { supabase } from "../supabase/supabase.config"

export const addBatches = async ({dataBatche}) => {
    try {

        // console.log(dataBatche)

        const {error } = await supabase.from('batches').insert({
            user_id: dataBatche.userId,
            name_batche: dataBatche.nameBatche,
            genetic_line: dataBatche.geneticLine,
            birthDate: dataBatche.birthDate,
            date_of_admission: dataBatche.dateAdmission,
            current_age: dataBatche.currentAge,
            initial_amount: dataBatche.initialAmount,
            total_deaths: dataBatche.totalDeaths,
            total_sold: dataBatche.totalSold,
            current_quantity: dataBatche.currentQuantity
        })

        if(error) {
            console.log(error.message)
            throw new Error("Erro al intentar registrar lote");
        }
    } catch (error) {
        console.log(error.message)
        throw new Error("Erro al intentar registrar lote");
    }
    
}