import constantVariables from "./constantVariables";

export function generateDebt(debt) {
    fetch(constantVariables.DEBTS_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'apikey': constantVariables.API_KEY
        },
        body: JSON.stringify(debt)
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        const payUrl = data.debt.payUrl ? data.debt.payUrl : null;
        console.log(data);
        return payUrl;
    })
    .then(payUrl => {
        if (payUrl) {
            window.location.href = payUrl;
        }
    })
    .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
    });
}

export async function getDebtPaid(debtId) {
    try {
        const response = await fetch(`${constantVariables.DEBTS_URL}/${debtId}`, {
            method: 'GET',
            headers: {
                'apikey': constantVariables.API_KEY
            }
        });

        if (!response.ok) {
            throw new Error('Respuesta no esperada');
        }

        const data = await response.json();
        console.log(data.debt.payStatus.status);        
        if(data.debt.payStatus.status === 'paid'){
            console.log('Pagado');
            window.alert('Pago realizado con éxito');
            //se pueden realizar llamadas o consultas utilizando lo que se tenga - posibilidades de finalizar el ciclo de pago
        } else if(data.debt.payStatus.status === 'pending'){
            //se pueden realizar llamadas o consultas utilizando lo que se tenga
            window.alert('El pago fue cancelado, queda pendiente');
        }
    } catch (error) {
        console.error('Problema con el fetch:', error);
        throw error;
    }
}

export function newDateFormatter(end){
    let date = new Date();
    if(end){
        date.setHours(date.getHours() + 12);
    }
    return  date.toISOString().replace(/(\.\d{3})?Z$/, '+0000');
}