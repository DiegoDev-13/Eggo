import { data } from "react-router-dom"
import { supabase } from "../supabase/supabase.config"

//Para agregar nuevos lotes 
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

//Para mostrar los lotes
export const getBatches = async (userId) => {
    try {
        // console.log(`id desd supabase  ${userId}`)
        const {data, error} = await supabase.from('batches').select('*').eq('user_id', userId).order('created_at', {ascending: false}).limit(6)


        if(error) {
            console.log(error.message)
            throw new Error("Erro al obtener tus lotes");
        }

        return data
    } catch (error) {
        if(error) {
            console.log(error.message)
            throw new Error("Erro al obtener tus lotes");
        }
    }
}   

export const removeLote = async (data) => {
    try {
        console.log(data)
        const {error} = await supabase.from('batches') .delete().eq('id', data.batcheId).eq('user_id', data.userId)

        if(error) {
            console.log(error.message)
            throw new Error("Eror al intentar eliminar Lote");
        }

    } catch (error) {
        if(error) {
            console.log(error.message)
            throw new Error("Eror al intentar eliminar Lote");
        }
    }
}