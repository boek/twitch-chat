import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { FlashList } from "@shopify/flash-list";

const tmi = require('tmi.js');

const client = new tmi.Client({
	channels: [ 'notonlydans' ]
});

type Message = {
    color: string
    username: string
    message: string
}

const useChatLog = () => {
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        console.log("useEffect");
        client.on('message', (channel, tags, message, self) => {
            console.log("tags", tags);
            setMessages(messages => [...messages, { color: tags['color'], username: String(tags['display-name']), message: message }]);
        });
        
        client.connect();

        return () => {
            client.disconnect();
        }
    }, [])

    return messages

    return [
        {
            username: "itsboek",
            message: "Hello the quick brown fox jumped over the lazy dog and we want it to wrap around"
        },
        {
            username: "itsboek",
            message: "Hello the quick brown fox jumped over the lazy dog and we want it to wrap around"
        },
        {
            username: "itsboek",
            message: "Hello the quick brown fox jumped over the lazy dog and we want it to wrap around"
        },
        {
            username: "itsboek",
            message: "Hello the quick brown fox jumped over the lazy dog and we want it to wrap around"
        },
        {
            username: "itsboek",
            message: "Hello the quick brown fox jumped over the lazy dog and we want it to wrap around"
        },
        {
            username: "itsboek",
            message: "Hello the quick brown fox jumped over the lazy dog and we want it to wrap around"
        },
        {
            username: "itsboek",
            message: "Hello the quick brown fox jumped over the lazy dog and we want it to wrap around"
        },
        {
            username: "itsboek",
            message: "Hello the quick brown fox jumped over the lazy dog and we want it to wrap around"
        },
        {
            username: "itsboek",
            message: "Hello the quick brown fox jumped over the lazy dog and we want it to wrap around"
        },
    ]
}

const UserText = ({ name, color }: { name: string, color: string }) => (
    <Text className="font-bold" style={{ color : color ? color : "purple"}}>{name}</Text>
)

const MessageSeparator = () => (
    <Text className="text-black dark:text-white">: </Text>
)

const MessageText = ({ message }: { message: string }) => (
    <Text className="text-black dark:text-white">{message}</Text>
)

const ChatListItem = ({ item }: { item: Message }) => (
    <Text className="p-1">
        <UserText name={item.username} color={item.color} />
        <MessageSeparator />
        <MessageText message={item.message} />
    </Text>
)

export default function ChatList() {
    const messages = useChatLog()
    console.log("boek", messages);
    return (
        <View className="flex-1 p-2">
            <FlashList
                renderItem={({ item }: { item : Message }) => {
                    return <ChatListItem item={item} />
                }}
                estimatedItemSize={50}
                data={messages}/>
        </View>
        )
}