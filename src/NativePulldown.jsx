import { RefreshControl, SafeAreaView, ScrollView } from "react-native";
import { createElement, useState } from "react";
import { mergeNativeStyles } from "@mendix/pluggable-widgets-tools";

const wait = timeout => new Promise(resolve => setTimeout(resolve, timeout));

const defaultStyle = {
    container: { flex: 1 }
};

export function NativePulldown({ content, pullDownAction, style }) {
    const [refreshing, setRefreshing] = useState(false);
    const styles = mergeNativeStyles(defaultStyle, style);

    function onRefresh() {
        setRefreshing(true);
        if (pullDownAction && pullDownAction.canExecute) {
            pullDownAction.execute();
            if (!pullDownAction.isExecuting) {
                setRefreshing(false);
            }
        } else {
            wait(2000).then(() => setRefreshing(false));
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollView}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            >
                {content}
            </ScrollView>
        </SafeAreaView>
    );
}
