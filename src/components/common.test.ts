import { createDomainMap } from './common';

describe('createDomainMap', () => {
  it('returns empty map and undefined firstDomain when input is null', () => {
    const result = createDomainMap(null);
    expect(result).toEqual({ domainMap: {}, firstDomain: undefined });
  });

  it('maps domains correctly and identifies first domain', () => {
    const domains = [
      { id: 'example.com' },
      { id: 'foo.com' },
      { id: 'bar.com' }
    ];
    const result = createDomainMap(domains);
    expect(result.domainMap).toEqual({
      'example.com': 'example.com',
      'foo.com': 'foo.com',
      'bar.com': 'bar.com'
    });
    expect(result.firstDomain).toBe('example.com');
  });

  it('ignores entries without id and still finds first valid domain', () => {
    const domains = [
      {},
      { id: 'valid.com' },
      { notId: 'skip.com' },
      { id: 'another.com' }
    ] as any;
    const result = createDomainMap(domains);
    expect(result.domainMap).toEqual({
      'valid.com': 'valid.com',
      'another.com': 'another.com'
    });
    expect(result.firstDomain).toBe('valid.com');
  });
});
