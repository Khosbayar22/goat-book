import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {useState} from "react";
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {DraxProvider, DraxView, DraxList} from 'react-native-drax';

export default function Temp() {

    const draggableItemList = [
        {
            "id": 1,
            "name": "А",
            "background_color": "red"
        },
        {
            "id": 2,
            "name": "Э",
            "background_color": "pink"
        },
        {
            "id": 3,
            "name": "О",
            "background_color": "orange"

        },
        {
            "id": 4,
            "name": "Ө",
            "background_color": "#aaaaff"
        },
        {
            "id": 5,
            "name": "Ү",
            "background_color": "blue"
        },
        {
            "id": 6,
            "name": "И",
            "background_color": "green"
        },
        {
            "id": 7,
            "name": "У",
            "background_color": "brown"

        },
    ];
    const FirstReceivingItemList = [
        {
            "id": 13,
            "name": "M",
            "background_color": '#ffaaff'
        },
        {
            "id": 14,
            "name": "N",
            "background_color": '#ffaaff'
        },
        {
            "id": 15,
            "name": "O",
            "background_color": '#ffaaff'
        },
        {
            "id": 16,
            "name": "P",
            "background_color": '#ffaaff'
        }
    ];

    const [receivingItemList, setReceivedItemList] = useState(FirstReceivingItemList);
    const [dragItemMiddleList, setDragItemListMiddle] = useState(draggableItemList);

    const DragUIComponent = ({item, index}) => {
        return (
            <DraxView
                style={[styles.centeredContent, styles.draggableBox, {backgroundColor: item.background_color}]}
                draggingStyle={styles.dragging}
                dragReleasedStyle={styles.dragging}
                hoverDraggingStyle={styles.hoverDragging}
                dragPayload={index}
                longPressDelay={150}
                key={index}
            >
                <Text style={styles.textStyle}>{item.name}</Text>
            </DraxView>
        );
    }

    const ReceivingZoneUIComponent = ({item, index}) => {
        return (
            <DraxView
                style={[styles.centeredContent, styles.receivingZone, {backgroundColor: item.background_color}]}
                receivingStyle={styles.receiving}
                renderContent={({viewState}) => {
                    const receivingDrag = viewState && viewState.receivingDrag;
                    const payload = receivingDrag && receivingDrag.payload;
                    return (
                        <View>
                            <Text style={styles.textStyle}>{item.name}</Text>
                        </View>
                    );
                }}
                key={index}
                onReceiveDragDrop={(event) => {
                    let selected_item = dragItemMiddleList[event.dragged.payload];
                    console.log('onReceiveDragDrop::index', selected_item, index);
                    console.log('onReceiveDragDrop :: payload', event.dragged.payload);
                    let newReceivingItemList = [...receivingItemList];
                    console.log('onReceiveDragDrop :: newReceivingItemList', newReceivingItemList);
                    newReceivingItemList[index] = selected_item;
                    setReceivedItemList(newReceivingItemList);

                    let newDragItemMiddleList = [...dragItemMiddleList];
                    console.log('onReceiveDragDrop :: newDragItemMiddleList 1', newDragItemMiddleList);
                    newDragItemMiddleList[event.dragged.payload] = receivingItemList[index];
                    console.log('onReceiveDragDrop :: newDragItemMiddleList 2', newDragItemMiddleList);
                    setDragItemListMiddle(newDragItemMiddleList);
                }}
            />
        );
    }

    const FlatListItemSeparator = () => {
        return (<View style={styles.itemSeparator}/>);
    }

    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <DraxProvider>
                <View style={styles.container}>
                    <View style={styles.receivingContainer}>
                        {receivingItemList.map((item, index) => ReceivingZoneUIComponent({item, index}))}
                    </View>
                    <View style={styles.draxListContainer}>
                        <DraxList
                            data={dragItemMiddleList}
                            renderItemContent={DragUIComponent}
                            keyExtractor={(item, index) => index.toString()}
                            numColumns={4}
                            ItemSeparatorComponent={FlatListItemSeparator}
                            scrollEnabled={true}
                        />
                    </View>
                </View>
            </DraxProvider>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        paddingTop: 40,
        justifyContent: 'space-evenly',
    },
    centeredContent: {
            borderRadius: 10,
    },
    receivingZone: {
        height: (Dimensions.get('window').width / 4) - 12,
        borderRadius: 10,
        width: (Dimensions.get('window').width / 4) - 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5
    },
    receiving: {
        borderColor: 'red',
        borderWidth: 2,
    },
    draggableBox: {
        width: (Dimensions.get('window').width / 4) - 12,
        height: (Dimensions.get('window').width / 4) - 12,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5
    },
    dragging: {
        opacity: 0.2,
    },
    hoverDragging: {
        borderColor: 'magenta',
        borderWidth: 2,
    },
    receivingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    itemSeparator: {
        height: 15
    },
    draxListContainer: {
        padding: 5,
        height: 200
    },
    receivingZoneContainer: {
        padding: 5,
        height: 100
    },
    textStyle: {
        fontSize: 18
    },
    headerStyle: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 20
    }
});