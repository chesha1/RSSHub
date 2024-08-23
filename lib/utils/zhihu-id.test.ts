import { describe, expect, it } from 'vitest';
import fetchHexID from '@/utils/zhihu-id';

describe('zhihu-id', () => {
    it('zhihu-id', () => {
        expect(fetchHexID('liu-kan-shan-78')).toBe('1ff1b2f722b63c734f9d184a9966f31c');
    });
});
