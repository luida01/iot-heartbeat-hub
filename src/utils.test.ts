import { describe, it, expect } from 'vitest';
import { getStatus } from './utils';

describe('getStatus', () => {
    it('should return ONLINE if lastSeenAt is less than 60 seconds ago', () => {
        const now = new Date();
        const lastSeenAt = new Date(now.getTime() - 30000); // 30 seconds ago
        expect(getStatus(now, lastSeenAt)).toBe('ONLINE');
    });

    it('should return OFFLINE if lastSeenAt is 60 seconds or more ago', () => {
        const now = new Date();
        const lastSeenAt = new Date(now.getTime() - 60000); // 60 seconds ago
        expect(getStatus(now, lastSeenAt)).toBe('OFFLINE');
    });

    it('should return OFFLINE if lastSeenAt is null', () => {
        const now = new Date();
        expect(getStatus(now, null)).toBe('OFFLINE');
    });
});
