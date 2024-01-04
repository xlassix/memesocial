'use client';

import { create as ipfs_client } from 'ipfs-http-client';

//initialize IPFS client
export const client = ipfs_client({
  host: 'node.lighthouse.storage',
  protocol: 'https',
  port: 443,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_LIGHTHOUSE_TOKEN}`,
  },
});
