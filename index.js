function getConvertedValue(id){
    const seatLeft = document.getElementById(id).innerText;
    const ConvertedPrice = parseInt(seatLeft)
    return ConvertedPrice
}
const result = getConvertedValue("sup")
console.log(result)

// const allbtn = document.getElementsByClassName("all-btn")
// console.log(allbtn)
// for(const btn of allbtn){
    // btn.addEventListener("click", function(event){
        // console.log(event.target.appendchild())
// 
    // })
// }

const node = document.createElement("button");
const textnode = document.createTextNode("A1");
node.appendChild(textnode);
document.getElementById("all-btn").appendChild(node);