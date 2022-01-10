import receipts from "../Data"
import Receipt from "./Receipt"
console.log(receipts);
function Main() {
    return(
        <div className="cardContainer">
            {receipts.map((receiptData, index)=>{                
                return receiptData.paid ?<div></div>: <Receipt receiptData={receiptData} key={index}/>
            })}
        </div>
        )
}

export default Main;