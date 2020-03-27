import React, {Component} from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl';



class MapBox extends Component {



  render() {
    const Map = ReactMapboxGl({
      accessToken:
        'pk.eyJ1IjoiaGFjaGFsbCIsImEiOiJjazhhY2U5ajkwMHh6M2dwZTZnODg2bXhuIn0.ESQOFjdsmHaRB2xsjobMDQ'
    });

    return (
      <div className={"map-box"}>


      <Map
        style="mapbox://styles/mapbox/light-v9"
        containerStyle={{
          height: '100%',
          minWidth: '100%'
        }}
        zoom={[16]}
        center={[-0.1749, 51.4988]}
      >
        {this.props.venues.map((venue) => {
          return (
            <Marker
              coordinates={[venue.longitude, venue.latitude]}
              className="marker"
              anchor="bottom"
            >

            </Marker>
          )
        })}

      </Map>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    map_state: state.map
  };
}

export default connect(mapStateToProps, null)(MapBox);
