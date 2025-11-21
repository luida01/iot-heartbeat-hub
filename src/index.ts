import express from 'express';
import { HeartbeatRequest, DeviceWithStatus } from './types';
import { upsertDevice, getAllDevices } from './store';
import { getStatus } from './utils';

const app = express();
const port = 3000;

app.use(express.json());

app.post('/devices/heartbeat', (req, res) => {
    const { deviceId, type } = req.body as HeartbeatRequest;

    if (!deviceId || !type) {
        return res.status(400).json({ error: 'Missing deviceId or type' });
    }

    const device = upsertDevice(deviceId, type);
    const status = getStatus(new Date(), device.lastSeenAt);

    const response: DeviceWithStatus = {
        ...device,
        status
    };

    res.json(response);
});

app.get('/devices', (req, res) => {
    const devices = getAllDevices();
    const now = new Date();

    const response: DeviceWithStatus[] = devices.map(device => ({
        ...device,
        status: getStatus(now, device.lastSeenAt)
    }));

    res.json(response);
});

app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
