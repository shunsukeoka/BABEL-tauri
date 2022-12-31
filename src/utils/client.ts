import { Procedures } from '@/types'
import { createClient } from '@rspc/client'
import { TauriTransport } from '@rspc/tauri'

export const tauriClient = createClient<Procedures>({
    transport: new TauriTransport(),
})
