import tintaTopazT15_RG from '../assets/images/tintas/T15-RG-2L-Packshot_CMYK.png'
import tintaTopazT35SK_LS from '../assets/images/tintas/T35_sin_light_SK-LS_5L_Bottles_bidon.png'
import tintaDiamondD10_ESM from '../assets/images/tintas/IMG-20230802-WA0025.png'
import tintaRubyR10_RTR from '../assets/images/tintas/ruby.png'
import tintaAquamarineAQ10_DST_HC from '../assets/images/tintas/aq10.png'
import tintaDiamondD15TRV2 from '../assets/images/tintas/Diamond_D15_TRV2.png'
import certificadoAdidas from '../assets/images/certificados/certificado_adidas.png'
import certificadoEco from '../assets/images/certificados/certificado_eco.png'
import certificadHC from '../assets/images/certificados/certificado_hc.png'
import certificadoOeko from '../assets/images/certificados/certificado_oeko.png'

const inkData = [
    {
        "id": 1,
        "name": "Topaz T15-RG",
        "imageUrl": tintaTopazT15_RG,
        "certifiedBy": [],
        "description": "La Topaz T15-RG es una tinta premium de última generación, específicamente diseñada para las impresoras Mimaki SWJ. Esta fórmula avanzada de bajo olor garantiza la creación de imágenes con una calidad excepcional, resaltando un acabado de alto brillo que realza cada detalle. Su destacada estabilidad durante la impresión asegura un rendimiento constante y fluido, incluso en trabajos prolongados, permitiendo una producción continua sin interrupciones. Además, ofrece una notable durabilidad en exteriores de hasta dos años, lo que la convierte en la opción ideal para impresiones de alto impacto, como gráficos retroiluminados, donde la luminosidad y el brillo son fundamentales.",
        "features": ['Acabado de alto brillo', 'Olor más bajo que las tintas OEM', 'Gran calidad de imagen', 'Ideal para la impresión retroiluminada', 'Excelente durabilidad al aire libre'],
        "compatibilitys": [
            { "brand": "Ricoh", "printhead": ["Gen5 (MH5420/5440)"] }
        ],
        "styles": {
            "colors": ["#000201", "#2d1205", "#5a2309", "#88340e", "#b54416", "#d1531d", "#e67e22"]
        }
    },
    {
        "id": 2,
        "name": "Topaz T35 SK-LS",
        "imageUrl": tintaTopazT35SK_LS,
        "certifiedBy": [],
        "description": "La Topaz T35 SK-LS es una tinta premium de secado rápido, cuidadosamente optimizada para su uso en cabezales de impresión Seiko SPT 35pl, lo que garantiza una impresión de alta velocidad con un rendimiento confiable y eficiente. Su fórmula de bajo olor no solo ofrece comodidad durante el proceso de impresión, sino que también asegura una excelente durabilidad en exteriores, haciéndola perfecta para proyectos que requieren resistencia a las inclemencias del tiempo. Además, es altamente compatible con una amplia gama de sustratos autoadhesivos y flexibles, proporcionando un acabado de alto brillo que resalta la calidad visual de cada impresión.",
        "features": ['Optimizada para Cabezales de Impresión Seiko SPT35pl', 'Rápido secado', 'Bajo olor', 'Ideal para impresiones de alta velocidad', 'Acabado de alto brillo', 'Buena durabilidad al exterior', 'Amplia gama de colores'],
        "compatibilitys": [
            { "brand": "Seiko SPT", "printhead": ["508gs/1020 (12pl)", "255/510/1020 (35pl)", "SPT 510 (50pl)"] },
            { "brand": "Spectra", "printhead": ["Polaris PQ-512 (15pl)", "PQ-512 (35pl)", "StarFire Sg1024", "Nova 256 (80pl)"] },
            { "brand": "Konica Minolta", "printhead": ["KM512 (14pl/35pl/42pl)", "KM1024i (30pl)", "KM1024 (14pl/42pl)"] },
            { "brand": "Ricoh", "printhead": ["Gen4-E1 (MH2420", "Gen5-E1 (MH5420/5440)"] },
            { "brand": "Xaar", "printhead": ["128/360 (45pl)", "128/200 (80pl)", "128/360 (45pl)", "126/360 (35pl)", "Xaar Proton (35pl/60pl)"] },
        ],
        "styles": {
            "colors": ["#000201", "#040e12", "#081923", "#0e283a", "#133850", "#174361", "#1b4f72"]
        }
    },
    {
        "id": 3,
        "name": "Diamond D10-ESM",
        "imageUrl": tintaDiamondD10_ESM,
        "certifiedBy": [certificadoEco],
        "description": "La tinta Diamond D10-ESM ha sido específicamente diseñada como un sustituto perfecto para las tintas Roland Eco Sol Max®, ofreciendo una alternativa confiable y de alto rendimiento. Su fórmula avanzada proporciona una mayor resistencia a la abrasión y a productos químicos, lo que garantiza una durabilidad superior en entornos exigentes. Además, la Diamond D10-ESM destaca por su excelente compatibilidad con una amplia gama de medios de impresión, incluyendo sustratos autoadhesivos y flexibles, asegurando resultados impecables en cada proyecto con un acabado profesional y duradero.",
        "features": ['Fórmula y color compatibles con Roland Eco Sol Max®', 'No requiere limpieza ni perfilado al cambiar de tinta original', 'Secado rápido y sin olor', 'Excelente durabilidad exterior', 'Mayor resistencia a abrasión y químicos', 'Garantía global de NUtec Digital para terceros'],
        "compatibilitys": [
            { "brand": "EPSON", "printhead": ["DX4", "DX5", "DX6", "DX7"] }
        ],
        "styles": {
            "colors": ["#000201", "#02071f", "#040c3d", "#061364", "#091a8c", "#0b1faa", "#0d24c8"]
        }
    },
    {
        "id": 4,
        "name": "Ruby R10-RTR",
        "imageUrl": tintaRubyR10_RTR,
        "certifiedBy": [],
        "description": "La Ruby R10-RTR es una tinta de alto rendimiento, especialmente diseñada para aplicaciones tanto en superficies rígidas como de rollo a rollo, y está optimizada para el uso con lámparas LED UV. Esta formulación destaca por su excelente desempeño en entornos de impresión exigentes y de alta velocidad, garantizando una producción rápida y eficiente. Además, ha sido desarrollada para ofrecer una amplia compatibilidad con diversos tipos de medios, lo que la convierte en una opción versátil para una gran variedad de proyectos. Su gama de colores superior proporciona imágenes más brillantes y vibrantes, asegurando una calidad visual impresionante en cada impresión.",
        "features": ['Diseñado para aplicaciones rígidas y rollo a rollo', 'Optimizado para lámparas UV LED', 'Excelente adhesión', 'Garantía del sistema de suministro de tinta (IDS) de NUtec Digital'],
        "compatibilitys": [
            { "brand": "EPSON", "printhead": ["DX4", "DX5", "DX6", "DX7"] }
        ],
        "styles": {
            "colors": ["#000201", "#120201", "#230201", "#3b0200", "#530100", "#640100", "#760100"]
        }
    },
    {
        "id": 5,
        "name": "Diamond D15 TRV2",
        "imageUrl": tintaDiamondD15TRV2,
        "certifiedBy": [certificadoEco],
        "description": "La tinta ecosolvente Diamond D15-TRV2 ha sido creada como un reemplazo directo para las tintas Roland TrueVIS TR2, ofreciendo una solución PLUG & PLAY que garantiza una transición sencilla y sin complicaciones. Su formulación libre de GBL proporciona una resistencia superior tanto a la abrasión como a los productos químicos, asegurando una durabilidad excepcional en condiciones exigentes. Además, la Diamond D15-TRV2 destaca por su excelente compatibilidad con una amplia gama de sustratos autoadhesivos y flexibles, lo que la convierte en una opción ideal para aplicaciones como la rotulación de vehículos, especialmente cuando se utiliza junto con películas laminadas, ofreciendo acabados impecables y duraderos.",
        "features": [],
        "compatibilitys": [
            { "brand": "Ricoh", "printhead": ["Gh2220"] }
        ],
        "styles": {
            "colors": ["#000201", "#060a09", "#0d1211", "#151d1c", "#1d2827", "#24302f", "#2a3837"]
        }
    },
    {
        "id": 6,
        "name": "Aquamarine AQ10-DST-HC",
        "imageUrl": tintaAquamarineAQ10_DST_HC,
        "certifiedBy": [certificadoAdidas, certificadHC, certificadoOeko],
        "description": "La Aquamarine AQ10-DST-HC es una tinta de sublimación de alta densidad diseñada específicamente para su uso en papeles de transferencia, tanto con recubrimiento como sin él. Su avanzada formulación permite una mayor productividad, facilitando la impresión a alta velocidad sin comprometer la calidad. Además, esta tinta optimiza el consumo, generando imágenes vibrantes y nítidas con una cantidad reducida de tinta, lo que maximiza la eficiencia en cada trabajo.",
        "features": ['Diseñada para impresión directa y por transferencia', 'Compatible con papel de transferencia ligero, bond o cuché', 'Ahorro de tinta con mayor eficiencia de transferencia', 'Mayor velocidad y productividad', 'Excelente confiabilidad y gama de colores', 'Secado rápido para alta velocidad'],
        "compatibilitys": [
            { "brand": "EPSON", "printhead": ["DX4", "DX5", "DX6", "DX7", "5113"] }
        ],
        "styles": {
            "colors": ["#000201", "#030708", "#030C0D", "#071518", "#09282E", "#104953", "#0EA0B7"]
        }
    }
]

export default inkData