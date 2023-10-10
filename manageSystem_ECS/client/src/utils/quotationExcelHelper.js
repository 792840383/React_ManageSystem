import * as XLSX from 'xlsx';

export const generateAndDownloadExcel = (inputData, data) => {
    // Flatten the data if it is not flat
    data = data.flat();

    // Calculate totals and discounts
    const discount = inputData.discount == null ? 1 : inputData.discount;
    const total = data.reduce((sum, item) => sum + item.price * item.number, 0);
    const totalAmount = total * discount;

    // Prepare data for Excel
    const excelData = data.map(item => ({
        Name: item.name,
        Description: item.desc,
        Company: item.company,
        District: item.district,
        Number: item.number,
        Price: item.price,
        SubTotal: item.price * item.number
    }));

    // Add a summary row
    excelData.push({
        Name: 'Total',
        Description: '',
        Company: '',
        District: '',
        Number: '',
        Price: total,
        SubTotal: totalAmount
    });

    // Convert data to worksheet
    const ws = XLSX.utils.json_to_sheet(excelData);

    // Convert worksheet to workbook
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    // Write workbook to file
    XLSX.writeFile(wb, 'download.xlsx');
};
