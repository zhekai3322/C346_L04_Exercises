// Ex 1
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
//
// const App = () => {
//   return (
//       <View style={styles.container}>
//         <Text style={styles.rpValues}>RP Values</Text>
//         <Text style={styles.excellence}>Excellence</Text>
//         <Text style={styles.customerCentric}>Customer-Centric</Text>
//         <Text style={styles.integrity}>Integrity</Text>
//         <Text style={styles.teamwork}>Teamwork</Text>
//         <Text style={styles.enterprising}>Enterprising</Text>
//       </View>
//   );
// };
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'top',
//     alignItems: 'right',
//   },
//   rpValues: {
//     fontSize: 24,
//   },
//   excellence: {
//     color: 'green',
//   },
//   customerCentric: {
//     backgroundColor: 'yellow',
//   },
//   integrity: {
//     fontStyle: 'italic',
//   },
//   teamwork: {
//     textAlign: 'center',
//   },
//   enterprising: {
//     backgroundColor: 'black',
//     color: 'white',
//   },
// });
//
// export default App;

//Ex 2
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
//
// const App = () => {
//     return (
//         <View style={styles.container}>
//             <View style={styles.greenBox}>
//                 <Text style={(styles.boxText, styles.title)}>Who We Are</Text>
//             </View>
//             <View style={styles.greenBox}>
//                 <Text style={styles.boxText}>Our People</Text>
//             </View>
//             <View style={styles.greenBox}>
//                 <Text style={styles.boxText}>Our Campus</Text>
//             </View>
//         </View>
//     );
// };
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'top',
//         alignItems: 'right',
//         backgroundColor: '#f0f0f0', // Light background for contrast
//     },
//     greenBox: {
//         width: 100,
//         height: 100,
//         marginTop: 30,
//         backgroundColor: 'green',
//         justifyContent: 'top', // Center text vertically
//         alignItems: 'center', // Center text horizontally
//     },
//     boxText: {
//         textAlign: 'center',
//         color: 'white',
//     },
//     title: {
//         fontWeight: 'bold',
//         color: 'white',
//         fontSize: 20, // Optional size for better visibility
//         marginBottom: 20, // Space between title and green boxes
//     },
// });

// export default App;

// Ex 3A
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
    return (
        <View style={styles.Parent}>
            {/*Ex 3C*/}
            {/*<View style={[styles.Child, { backgroundColor: 'powderblue', maxWidth: 90}]}>*/}
            {/*Ex 3D*/}
            {/*<View style={[styles.Child, { backgroundColor: 'powderblue', flex: 1 }]}>*/}
            <View style={[styles.Child, { backgroundColor: 'powderblue' }]}>
                <Text style={styles.ChildText}>Child One</Text>
            </View>
            {/*Ex 3D*/}
            {/*<View style={[styles.Child, { backgroundColor: 'skyblue', flex: 2 }]}>*/}
            <View style={[styles.Child, { backgroundColor: 'skyblue' }]}>
                <Text style={styles.ChildText}>Child Two</Text>
            </View>
            {/*Ex 3C*/}
            {/*<View style={[styles.Child, { backgroundColor: 'steelblue', maxHeight: 120 }]}>*/}
            {/*Ex 3D*/}
            {/*<View style={[styles.Child, { backgroundColor: 'steelblue', flex: 3 }]}>*/}
            <View style={[styles.Child, { backgroundColor: 'steelblue' }]}>
                <Text style={styles.ChildText}>Child Three</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    Parent: {
        flexDirection: 'column',
        backgroundColor: '#F5fcff',
        borderColor: '#0099AA',
        borderWidth: 5,
        // Ex 3D
        flex: 1,

        // Ex 3E
        // justifyContent: 'flex-start', // Align children at the start
        // justifyContent: 'flex-end', // Align children at the end
        // justifyContent: 'center', // Center children in the container
        // justifyContent: 'space-between', // Evenly space children with no space at edges
        // justifyContent: 'space-around', // Evenly space children with space around edges
        // justifyContent: 'space-evenly', // Evenly distribute children with equal spacing around them
    },
    Child: {
        borderWidth: 2,
        alignItems: 'center', // Center text horizontally
        justifyContent: 'top', // Center text vertically
        // Ex 3E
        // flex: 1, // Allow children to grow equally
        marginHorizontal: 3, // Space between children
    },
    ChildText: {
        textAlign: 'center',
        fontSize: 24,
        color: 'black',
    },
});

export default App;

// //Ex 4
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
//
// const App = () => {
//     return (
//         <View style={styles.Parent}>
//             <View style={[styles.Child, { backgroundColor: 'lightblue' }]}>
//                 <Text style={styles.ChildText}>Square 1</Text>
//             </View>
//             <View style={[styles.Child, { backgroundColor: 'green' }]}>
//                 <Text style={styles.ChildText}>Square 2</Text>
//             </View>
//             <View style={[styles.Child, { backgroundColor: 'red' }]}>
//                 <Text style={styles.ChildText}>Square 3</Text>
//             </View>
//         </View>
//     );
// };
//
// const styles = StyleSheet.create({
//     Parent: {
//         flexDirection: 'row',
//         backgroundColor: 'whitesmoke',
//         marginTop: 30,
//         flex: 1, // Allow Parent to take full height of the screen
//         justifyContent: 'center', // Center children vertically
//         alignItems: 'center', // Center children horizontally
//     },
//     Child: {
//         width: 80,
//         height: 80,
//         backgroundColor: 'lightblue', // Optional: give a color to visualize the squares
//         margin: 10, // Optional: space between squares
//         justifyContent: 'center', // Center text vertically
//         alignItems: 'center', // Center text horizontally
//     },
//     ChildText: {
//         color: 'black', // Change text color for better visibility
//     },
// });
//
// export default App;

