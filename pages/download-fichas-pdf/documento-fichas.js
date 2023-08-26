import { Document,
  Page,
  View,
  Text,
  Link,
  Font,
  StyleSheet, } from '@react-pdf/renderer';

import { getFichas } from '../../db/db';
import { useState, useEffect } from "react";


// Create styles
const styles = StyleSheet.create({
  title: {
    margin: 20,
    fontSize: 25,
    textAlign: 'center',
    backgroundColor: '#e4e4e4',
    textTransform: 'uppercase',
    fontFamily: 'Oswald',
  },
  body: {
    flexGrow: 1,
  },
  row: {
    flexGrow: 1,
    flexDirection: 'row',
  },
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  block: {
    flexGrow: 1,
  },
  text: {
    width: '60%',
    margin: 10,
    fontSize: 12,
    fontFamily: 'Oswald',
    textAlign: 'justify',
  },
  fill1: {
    width: '40%',
    backgroundColor: '#e14427',
  },
  fill2: {
    flexGrow: 2,
    backgroundColor: '#e6672d',
  },
  fill3: {
    flexGrow: 2,
    backgroundColor: '#e78632',
  },
  fill4: {
    flexGrow: 2,
    backgroundColor: '#e29e37',
  },
});

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
});

// Create Document Component
function MyDocumentFichas () {
  const [originalFichas, setOriginalFichas] = useState([]);
  const [orderedFichas, setOrderedFichas] = useState([]);

  //----Función useEffect asyncrona para obtener la data de fichas-------
  useEffect(() => {
    async function fetchFichas() {
        try {
            const data = await getFichas();
            setOriginalFichas(data);
            const orderedData = [...data].sort((a, b) => a.numero_ficha - b.numero_ficha);
            setOrderedFichas(orderedData);
        } catch (error) {
            console.error(error);
        }
    }

    fetchFichas();
}, []);
//----Función useEffect asyncrona para obtener la data de fichas-------


    return(
      <Document>
    <Page size="A4">
      <Link
        style={styles.title}
      >
        Biometric services - Fichas
      </Link>
      {orderedFichas.map((ficha) => {
        // Extraer el ID de la URL
        const urlParts = ficha.url.split('/');
        const id = urlParts[urlParts.length - 2]; // Suponemos que el ID está antes del último slash
        return (
      <View style={styles.body} key={ficha.url}>
        <View style={styles.row}>
          <View style={styles.section}>
            <Text>Id ficha</Text>
            <Text style={styles.text}>
            {id}
            </Text>
          </View>
          <View style={styles.section}>
            <Text>Número de ficha</Text>
            <Text style={styles.text}>
            {ficha.numero_ficha}
            </Text>
          </View>
          <View style={styles.section}>
            <Text>Nombre de ficha</Text>
            <Text style={styles.text}>
            {ficha.nombre_ficha}
            </Text>
          </View>
          <View style={styles.section}></View>
        </View>
      </View>
      );
    })}
    </Page>
    </Document>
);
}
export default MyDocumentFichas;