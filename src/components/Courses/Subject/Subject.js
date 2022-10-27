import React from 'react';
import { useLoaderData } from 'react-router-dom';
import jsPDF from 'jspdf';
const Subject = () => {
    const subjectData = useLoaderData()
    console.log(subjectData)
    const { balance, name, picture } = subjectData
    const generatePdf = () => {
        const doc = new jsPDF("p", "pt", "a4")
        doc.html(document.querySelector("#pdf"), {
            callback: function (pdf) {
                const pageCount = doc.internal.getNumberOfPages()
                pdf.deletePage(pageCount)
                pdf.save('mypdf.pdf')
            }
        })
    }
    return (
        <div>
            <div id='pdf' className="hero min-h-screen" style={{ backgroundImage: `url(${picture})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{name}</h1>
                        <p className="mb-5 text-2xl">{balance}</p>
                        <button className="btn btn-primary" onClick={generatePdf} type='primary'>PDF</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subject; 