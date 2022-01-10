function Receipt(props) {
    const {receiptData}= props
    return(
        <div className="card">
            <div><h2>{receiptData.person}</h2></div>
            <div>
                <ul>
                    <li><span className="tag">Main:</span> {receiptData.order.main}</li>
                    <li><span className="tag">Protien:</span> {receiptData.order.protein}</li>
                    <li><span className="tag">Rice:</span> {receiptData.order.rice}</li>
                    <li><span className="tag">Sauce:</span> {receiptData.order.sauce}</li>
                    <li><span className="tag">Drink:</span> {receiptData.order.drink}</li>
                    <li><span className="tag">Cost:</span> {receiptData.order.cost}</li>
                </ul>
            </div>
        </div>
    )
}

export default Receipt;