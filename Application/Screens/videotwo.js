import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Slider,
  FlatList,
  Image,
  TouchableNativeFeedback,
  TouchableOpacity
} from 'react-native';
import Video from 'react-native-video'; /// alreadyimported this
import Icon from 'react-native-vector-icons/FontAwesome5'; // and this
// import Orientation from 'react-native-orientation';
import data from '../json/videos.json';
import { ScrollView } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

export default class App extends React.Component {
  constructor(p) {
    super(p);
    this.state = {
      data:this.props.navigation.state.params.data,
      currentVideo: 0,
      currentTime: 0,
      duration: 0.1,
      paused: false,
      overlay: false,
      isFullScreen: false,
      screenType: 'content',
      dataSource: [],
    };
  }
  componentDidMount(){
    this.setState({
       isLoading: false,
       dataSource: this.state.data,      
   });  
  }
  lastTap = null;
  handleDoubleTap = (doubleTapCallback, singleTapCallback) => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;
    if (this.lastTap && (now - this.lastTap) < DOUBLE_PRESS_DELAY) {
      clearTimeout(this.timer);
      doubleTapCallback();
    } else {
      this.lastTap = now;
      this.timer = setTimeout(() => {
        singleTapCallback();
      }, DOUBLE_PRESS_DELAY);
    }
  }

  getTime = t => {
    const digit = n => n < 10 ? `0${n}` : `${n}`;
    // const t = Math.round(time);
    const sec = digit(Math.floor(t % 60));
    const min = digit(Math.floor((t / 60) % 60));
    const hr = digit(Math.floor((t / 3600) % 60));
    return hr + ':' + min + ':' + sec; // this will convert sec to timer string
    // 33 -> 00:00:33
    // this is done here
    // ok now the theme is good to look
  }

  load = ({ duration }) => this.setState({ duration }) // now here the duration is update on load video
  progress = ({ currentTime }) => this.setState({ currentTime }) // here the current time is upated

  // backward = () => {
  //   this.video.seek(this.state.currentTime - 5);
  //   clearTimeout(this.overlayTimer);
  //   this.overlayTimer = setTimeout(() => this.setState({ overlay: false }), 3000);
  // }
  // forward = () => {
  //   this.video.seek(this.state.currentTime + 5); // here the video is seek to 5 sec forward
  //   clearTimeout(this.overlayTimer);
  //   this.overlayTimer = setTimeout(() => this.setState({ overlay: false }), 3000);
  // }

  onslide = slide => {
    this.video.seek(slide * this.state.duration); // here the upation is maked for video seeking
    clearTimeout(this.overlayTimer);
    this.overlayTimer = setTimeout(() => this.setState({ overlay: false }), 3000);
  }

  youtubeSeekLeft = () => {
    const { currentTime } = this.state;
    this.handleDoubleTap(() => {
      this.video.seek(currentTime - 5);
    }, () => {
      this.setState({ overlay: true });
      this.overlayTimer = setTimeout(() => this.setState({ overlay: false }), 3000);
    })
  }
  youtubeSeekRight = () => {
    const { currentTime } = this.state;
    this.handleDoubleTap(() => { // this fn is used to detect the double tap first callback
      this.video.seek(currentTime + 5);
    }, () => {
      this.setState({ overlay: true });
      this.overlayTimer = setTimeout(() => this.setState({ overlay: false }), 3000);
    })
  }

  // fullscreen = () => {
  //   const { fullscreen } = this.state;
  //   if(fullscreen) {
  //     Orientation.lockToPortrait();
  //   } else {
  //     Orientation.lockToLandscape();
  //   }
  //   this.setState({ fullscreen: !fullscreen });
  // }
  
  forward = () => {
    if (this.state.currentVideo != 3) {
       this.setState({ currentVideo: this.state.currentVideo + 1 });
    } else {
       this.setState({ currentVideo: 0 });
    }
 }
 backward = () => {
    if (this.state.currentVideo != 0) {
       this.setState({ currentVideo: this.state.currentVideo - 1 });
    } else {
       this.setState({ currentVideo: 3 });
    }
 }

  render = () => {
    const VIDEOS1 = [];  
    var n =JSON.stringify(data.info.length)
    
     for(let i=0;i<4;i++)
     {
        VIDEOS1.push((data.info[i].video));
       
     }
    // alert(VIDEOS1)
    const { currentTime, duration, paused, overlay, fullscreen } = this.state;
    return (
      <View style={style.container}>
        <View style={fullscreen ? style.fullscreenVideo : style.video}>
          <Video
            fullscreen={fullscreen}
            paused={paused} // this will manage the pause and play
            ref={ref => this.video = ref}
            source={{uri: this.state.data}}
            style={{ ...StyleSheet.absoluteFill }}
            resizeMode='cover'
            onLoad={this.load}
            onProgress={this.progress}
           
          // onVideoEnd={this.onEndVideo}
          />
           
          <View style={style.overlay}>
            {/* now we can remove this not */}
            
            {overlay ? <View style={{ ...style.overlaySet, backgroundColor: '#0006' }}>
           
              <Icon name='backward' style={style.icon} onPress={this.backward} />
              <Icon name={paused ? 'play' : 'pause'} style={style.icon} onPress={() => this.setState({ paused: !paused })} />
              <Icon name='forward' style={style.icon} onPress={this.forward} />
              <Icon onPress={this.fullscreen} name={fullscreen ? 'compress' : 'expand'}  style={style.icon1} />
              <View style={style.sliderCont}>
             
                <View style={style.timer}>
                  <Text style={{ color: 'white' }}>{this.getTime(currentTime)}</Text>
                  <Text style={{ color: 'white' }}>{this.getTime(duration)}  </Text>
                </View>
                <Slider
                  // we want to add some param here
                  maximumTrackTintColor='white'
                  minimumTrackTintColor='white'
                  thumbTintColor='white' // now the slider and the time will work
                  value={currentTime / duration} // slier input is 0 - 1 only so we want to convert sec to 0 - 1
                  onValueChange={this.onslide} 
                />
              </View>
            </View> : <View style={style.overlaySet}>
                <TouchableNativeFeedback onPress={this.youtubeSeekLeft}><View style={{ flex: 1 }} /></TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={this.youtubeSeekRight}><View style={{ flex: 1 }} /></TouchableNativeFeedback>
              </View>}
          </View>
        </View>

        
        {/* <ScrollView>
     <FlatList
       data={this.state.data}
       renderItem={({item}) => 


   <View style={{ width: width / 1 - 30, height: width / 3 , borderWidth: 0.5, borderColor: '#dddddd' }}>
    
             <View style={{ flex: 1,flexDirection:'row', marginBottom:3 }}>
                 <Video
                     style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                     paused={paused}
                     source={{ uri: item.video }}  />
             
             <View style={{ flex: 1, alignItems: 'flex-start',justifyContent:'flex-start',marginLeft:5, justifyContent: 'space-evenly', paddingLeft: 10 }}>
                 <Text style={{ fontSize: 15, color: '#b63838' }}> {item.title}</Text>
                 <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{item.video}</Text>
                
             </View>
             </View>
            
         </View>
    
         
       }
       keyExtractor={({id}, index) => id}
       ItemSeparatorComponent={this.renderSeparator}
     />
     </ScrollView> */}
   </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  overlay: {
    ...StyleSheet.absoluteFillObject
  },
  overlaySet: {
    flex: 1,
    flexDirection: 'row'
  },
  icon: {
    color: 'white',
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 25
  },
  icon1: {
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'top',
    fontSize: 25
  },
  sliderCont: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  },
  timer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5
  },
  video: { width, height: width * .6, backgroundColor: 'black' },
  fullscreenVideo: {
    backgroundColor: 'black',
    ...StyleSheet.absoluteFill,
    elevation: 1
  }
});