import jsPDF from 'jspdf'

const htmltopdf=(htmlText,fileName)=>{
    var doc=new jsPDF('p','pt','a4')
    doc.html(htmlText,{
        margin:[40,1,40,1],
        autoPaging:'text',
        callback:function(pdf){
            var pageCount=doc.internal.getNumberOfPages();
            pdf.deletePage(pageCount+1);
            pdf.save(fileName);
        }
    })
}

module.exports={
    htmltopdf
}