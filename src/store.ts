import { Device } from './types';

// In-memory storage
// Map<deviceId, Device>
export const deviceStore = new Map<string, Device>();

export function upsertDevice(deviceId: string, type: any): Device {
    const device: Device = {
        deviceId,
        type,
        lastSeenAt: new Date()
    };
    deviceStore.set(deviceId, device);
    return device;
}

export function getAllDevices(): Device[] {
    return Array.from(deviceStore.values());
}
