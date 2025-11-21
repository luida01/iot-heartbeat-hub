

const API_URL = 'http://localhost:3000';

async function simulate() {
    console.log('🚀 Starting simulation...');

    // 1. Check Health
    try {
        const healthRes = await fetch(`${API_URL}/health`);
        const healthData = await healthRes.json();
        console.log('✅ Health Check:', healthData);
    } catch (error) {
        console.error('❌ Server not running. Please start it with "npm start"');
        process.exit(1);
    }

    // 2. Send Heartbeat
    const deviceId = 'test-device-01';
    console.log(`\n💓 Sending heartbeat for ${deviceId}...`);

    const heartbeatRes = await fetch(`${API_URL}/devices/heartbeat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            deviceId,
            type: 'SENSOR'
        })
    });
    const heartbeatData = await heartbeatRes.json();
    console.log('✅ Heartbeat Response:', heartbeatData);

    // 3. Get All Devices
    console.log('\n📋 Fetching all devices...');
    const devicesRes = await fetch(`${API_URL}/devices`);
    const devicesData = await devicesRes.json();
    console.log('✅ Devices List:', devicesData);

    console.log('\n✨ Simulation complete!');
}

simulate();
