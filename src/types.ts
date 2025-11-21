export type DeviceType = 'SCREEN' | 'SENSOR' | 'GATEWAY';

export interface Device {
    deviceId: string;
    type: DeviceType;
    lastSeenAt: Date;
}

export interface DeviceWithStatus extends Device {
    status: 'ONLINE' | 'OFFLINE';
}

export interface HeartbeatRequest {
    deviceId: string;
    type: DeviceType;
}
