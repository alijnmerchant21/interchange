/* eslint-disable */
import { Order } from '../ibcdex/order';
import { Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'tendermint.interchange.ibcdex';
const baseBuyOrderBook = { creator: '', index: '', orderIDTrack: 0, amountDenom: '', priceDenom: '' };
export const BuyOrderBook = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== '') {
            writer.uint32(18).string(message.index);
        }
        if (message.orderIDTrack !== 0) {
            writer.uint32(24).int32(message.orderIDTrack);
        }
        if (message.amountDenom !== '') {
            writer.uint32(34).string(message.amountDenom);
        }
        if (message.priceDenom !== '') {
            writer.uint32(42).string(message.priceDenom);
        }
        for (const v of message.orders) {
            Order.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBuyOrderBook };
        message.orders = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                case 3:
                    message.orderIDTrack = reader.int32();
                    break;
                case 4:
                    message.amountDenom = reader.string();
                    break;
                case 5:
                    message.priceDenom = reader.string();
                    break;
                case 6:
                    message.orders.push(Order.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseBuyOrderBook };
        message.orders = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        if (object.orderIDTrack !== undefined && object.orderIDTrack !== null) {
            message.orderIDTrack = Number(object.orderIDTrack);
        }
        else {
            message.orderIDTrack = 0;
        }
        if (object.amountDenom !== undefined && object.amountDenom !== null) {
            message.amountDenom = String(object.amountDenom);
        }
        else {
            message.amountDenom = '';
        }
        if (object.priceDenom !== undefined && object.priceDenom !== null) {
            message.priceDenom = String(object.priceDenom);
        }
        else {
            message.priceDenom = '';
        }
        if (object.orders !== undefined && object.orders !== null) {
            for (const e of object.orders) {
                message.orders.push(Order.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        message.orderIDTrack !== undefined && (obj.orderIDTrack = message.orderIDTrack);
        message.amountDenom !== undefined && (obj.amountDenom = message.amountDenom);
        message.priceDenom !== undefined && (obj.priceDenom = message.priceDenom);
        if (message.orders) {
            obj.orders = message.orders.map((e) => (e ? Order.toJSON(e) : undefined));
        }
        else {
            obj.orders = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseBuyOrderBook };
        message.orders = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        if (object.orderIDTrack !== undefined && object.orderIDTrack !== null) {
            message.orderIDTrack = object.orderIDTrack;
        }
        else {
            message.orderIDTrack = 0;
        }
        if (object.amountDenom !== undefined && object.amountDenom !== null) {
            message.amountDenom = object.amountDenom;
        }
        else {
            message.amountDenom = '';
        }
        if (object.priceDenom !== undefined && object.priceDenom !== null) {
            message.priceDenom = object.priceDenom;
        }
        else {
            message.priceDenom = '';
        }
        if (object.orders !== undefined && object.orders !== null) {
            for (const e of object.orders) {
                message.orders.push(Order.fromPartial(e));
            }
        }
        return message;
    }
};
