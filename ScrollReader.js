import Expo from 'expo';
import React from 'react';
import { Dimensions, ScrollView, StyleSheet, WebView } from 'react-native';
import { Card } from 'react-native-elements';

const width = Dimensions.get('window').width; //full width

export default class ScrollReader extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			dataSource: [
        { title: 'One' },
        { title: 'Two' },
        { title: 'Three' }
      ],
			scrollTimes: 2
		};

		this.handleScroll = this.handleScroll.bind(this);
		this.loadPrev = this.loadPrev.bind(this);
		this.loadMore = this.loadMore.bind(this);
	}

  loadMore () {
    this.setState({
			dataSource: [
        { title: 'Two' },
        { title: 'Three' },
        { title: 'Four' }
      ],
    });
  }

  loadPrev () {
    this.setState({
			dataSource: [
        { title: 'One' },
        { title: 'Two' },
        { title: 'Three' },
      ],
    });
  }

	handleScroll (event) {
		//const x = event.nativeEvent.contentOffset.x;

		const { activeIndex, scrollTimes } = this.state;

		const windowWidth = Dimensions.get('window').width;
		const eventWidth = event.nativeEvent.contentSize.width;
		const offset = event.nativeEvent.contentOffset.x;
		console.log('event width: ', eventWidth);
		console.log('event offset: ', offset);

		console.log('scrollTimes: ', scrollTimes);
		//if (scrollTimes <= 1 ) return;

		if (windowWidth + offset >= eventWidth) {
			//ScrollEnd, do sth...
			console.log('scrollEnd right (nextPage)', offset);
			const nextIndex = activeIndex + 1;
			console.log('nextIndex: ', nextIndex);

      // Load next page
      this.loadMore()

		} else if (windowWidth - offset <= eventWidth) {
			//ScrollEnd, do sth...
			console.log('scrollEnd left (prevPage)', offset);

      // Load prev page
      this.loadPrev()
		}

		this.setState({ scrollTimes: scrollTimes + 1 });
	}

	renderCard (key, rowData) {
		return (
			<Card
        style={{ width, marginTop: 150 }}
        key={key}
        title={rowData.title}
      />
		);
	}

  render() {
    return (
      <ScrollView
        ref={ ref => this.scrollView = ref }
        pagingEnabled={true}
        pageSize={1}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        onScroll={this.handleScroll}
        scrollEventThrottle={16}
        contentOffset={{ x: width, y: 0 }}
      >
      {
				this.state.dataSource
				? this.state.dataSource.map((w, i) => this.renderCard(i, w))
				: undefined
			}
      </ScrollView>
    );
  }
}

