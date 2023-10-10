// 如果您尚未引入jsPDF，可以从CDN引入:
// <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.4.0/jspdf.umd.min.js"></script>
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.3/html2pdf.bundle.min.js"></script>
// Call the function to generate the conten
export const generateAndDownloadPDF = (inputData, data) => {
    //InputData=>Input value
    //Data=> Data Rows
    data = data.flat()
    console.log(data)
    const discount = (inputData.discount==null?1:inputData.discount)
    const total = data.reduce((sum, item) => sum + item.price*item.number, 0);
    const totalAmount = total*discount;

    // 1. Generate the HTML content
    const styles = `
    body {
        font-family: Arial, sans-serif;
        padding: 20px;
    }
    table {
        width: 100%;
        border-collapse: collapse;
    }
    table,td {
        border: 1px solid black;
    }
    th {
        font-weight: bold;  /* 设置文本为粗体 */
        border: 2px solid black;  /* 边框加粗 */
    }
    th, td {
        padding: 5px;
        text-align: center;
    }
    .header {
        text-align: center;
        margin-bottom: 20px;
    }
    .image{
        width: 100px;  /* 你的图片宽度 */
        height: 50px;  /* 你的图片高度 */
    }
    .column-container{
    display:flex;
        justify-content:space-between;
    }

    .company-details-left {
        width:50%;
    }

    .company-details-right{
        width:50%
    }

    .title{
        font-size:40pt;
        text-decoration: underline;
        text-align:center;
    }
`;
let subTotal = 0;
const tableRows = data.map(item => {
    subTotal = item.price*item.number; // 在每次迭代时累积价格
    return `
        <tr>
            <td>${item.name}</td>
            <td>${item.desc}</td>
            <td>${item.company}</td>
            <td>${item.district}</td>
            <td>${item.number}</td>
            <td>${item.price}</td>
            <td>${subTotal}</td> <!-- 显示累积的小计 -->
        </tr>
    `;
}).join('');
    // The HTML content
    const content = `
    <div class = "headerDiv">
        <div class = "image">
            <img src=${require('../static/oocl.png')} alt="Image description" width="300" height="200">
        </div>
        <div class="header">
            <h2>GORGEOUS SHIPPING CO., LTD</h2>
            <p>Address: NO.8 Fengxi road changxing Town, Shanghai City, P.R.China</p>
            <p>Contact: TEL: +86 13162127666 FAX: 0086 51381733640</p>
            <p>Email: zhao@gorgeousmarine.com ; gorgeous@china.com</p>
        </div>
    </div>

    <div class="title">
        Quotation
    </div>
    <div class = "column-container">
        <div class="company-details-left">
            <p>To: ${inputData.To}</p>
            <p>Attn: ${inputData.Attn}</p>
            <p>Vessel Name:${inputData.Vessel}</p>
            <p>Date:${inputData.date}</p>
        </div>
        <div class= "company-details-right">
            <p>Delivery at: ${inputData.delivery}</p>
            <p>Sales: ${inputData.sales}</p>
            <p>Currency: ${inputData.currency}</p>
            <p>Ref No: ${inputData.ref}</p>  
        </div>
    </div>
    

    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>desc</th>
                <th>company</th>
                <th>district</th>
                <th>number</th>
                <th>price</th>
                <th>subTotal</th>
            </tr>
        </thead>
        <tbody>
        ${tableRows}
        </tbody>
    </table>

    <div class="totals">
        <p>Sub Total: ${total}</p>
        <p>Discount (%): ${discount}</p>
        <p>Total Amount: ${totalAmount}</p>
    </div>
`;
    // Append the content to the body
    document.head.insertAdjacentHTML('beforeend', `<style>${styles}</style>`);
    document.body.innerHTML = content;

    // 2. Convert the generated HTML to PDF
    html2canvas(document.body).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();

        const imgWidth = 210;  // A4 width in mm
        const pageHeight = 295;  // A4 height in mm
        const imgHeight = canvas.height * imgWidth / canvas.width;
        let heightLeft = imgHeight;

        let position = 0;
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }
        pdf.save('download.pdf');
    });
}

// Call the function to generate and download the PDF
