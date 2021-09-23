import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import {useRef,useEffect,useState} from 'react';

function CameraScreen(prop){

    const videoRef=useRef(null);
    const photoRef=useRef(null);

    const[hasPhoto, setHasPhoto]=useState(false);

    const getVideo = () => {
        navigator.mediaDevices
            .getUserMedia({
                video: {width:1920, height:1080}
            })
            .then(stream =>{
                let video=videoRef.current;
                video.srcObject=stream;
                video.play();
            })
            .catch(err=> {
                console.error(err);
            })
    }

    const takePhoto = () => {
        const width = 414;
        const height = width/ (16/9);

        let video=videoRef.current;
        let photo=photoRef.current;

        photo.width=width;
        photo.height=height;

        let ctx =photo.getContext('2d');
        ctx.drawImage(video, 0, 0, width, height);
        setHasPhoto(true);
    }

    const closePhoto = () =>{
        let photo=photoRef.current;
        let ctx =photo.getContext('2d');
        setHasPhoto(false);

        ctx.clearRect(0, 0, photo.width, photo.height);
    }

    useEffect(()=>{
        getVideo();
    },[videoRef])

    return (
        <View style={styles.container}>
            <View style={styles.cameraApp}>
                <View style={styles.video}>
                    <video ref={videoRef}></video>
                </View>
                <View style={styles.button}>
                    <button onClick={takePhoto}>CAPTURE!</button>
                </View>
            </View>
            <Text> </Text>
            <div className={"result " + (hasPhoto ? 'hasPhoto': '')}>
                <View style={styles.result}>
                    <View style={styles.camera}>
                        <canvas ref={photoRef}></canvas>
                    </View>
                    <View style={styles.closeButton}>
                        <button onClick={closePhoto}>CLOSE!</button>
                    </View>
                </View>
            </div>
        </View>
    );
}

const styles=StyleSheet.create({
    heading: {
    fontSize: 48,
    color: 'black',
    alignItems: 'center',
    height: 80
    },
    container:{
        margin:0,
        padding:0,
        borderWidth:1,
        fontFamily:'Fira Sans'
    },
    cameraApp:{
        minHeight:100,
        position:'relative',
        backgroundColor: '#313131'
    },
    camera:{
        position:'relative'
    },
    result:{
        position:'relative',
        top:0,
        width:'100%',
        height:500,
        display:'flex',
        alignItems:'center',
        backgroundColor:"#777",
        
    },
    hasPhoto:{
        left:0
    },
    video:{
        width:'100%',
        maxWidth:'100%',
        height:'auto'
    },
    button:{
        position:'absolute',
        bottom:20,
        left:20,
        backgroundColor:"#dcdcdc",
        fontSize:24,
        
    },
    closeButton:{
        position:'absolute',
        bottom:20,
        height:100,
        left:20,
        padding: 1,
        backgroundColor:"#777",
        fontSize:24,
        
    },
    canvas:{
        width:'100%',
        height:'auto'
    }
})

export default CameraScreen;