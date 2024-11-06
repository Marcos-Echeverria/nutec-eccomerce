import printerDTFUV from '../assets/images/impresoras/printer_DTF_UV.png'
import printerKJ1602 from '../assets/images/impresoras/printer_kj_1620.jpg'
import printerKJ1803 from '../assets/images/impresoras/printer_kj_1803UV.png'
import printerKJ3202 from '../assets/images/impresoras/printer_kj_3202.png'

import dataPrinterDTFUV from '../assets/images/impresoras/data_printer_DTF_UV.jpg'
import dataPrinterKJ1602 from '../assets/images/impresoras/data_printer_kj_1620.jpg'
import dataPrinterKH1803UV from '../assets/images/impresoras/data_printer_kj_1803UV.jpg'
import dataPrinterKJ3202 from '../assets/images/impresoras/data_printer_kj_3202.jpg'



const printersData = [
    {
        "name": "KJ-1602",
        "image": printerKJ1602,
        "data": dataPrinterKJ1602
    },
    {
        "name": "KJ-1803UV",
        "image": printerKJ1803,
        "data": dataPrinterKH1803UV
    },
    {
        "name": "KJ-3202",
        "image": printerKJ3202,
        "data": dataPrinterKJ3202,
    },
    {
        "name": "DTF UV",
        "image": printerDTFUV,
        "data": dataPrinterDTFUV,
    }
]

export default printersData