import path from 'node:path'
import fs from 'fs-extra'

/**
 * node api, remove directory
 * @param filePath
 */
async function remove(filePath: string) {
    const files = fs.readdirSync(filePath)
    for (let i = 0; i < files.length; i++) {
        const newPath = path.join(filePath, files[i])
        const stat = fs.statSync(newPath)
        if (stat.isDirectory())
            await remove(newPath)
        else
            fs.unlinkSync(newPath)
    }
    fs.rmdirSync(filePath)
}

export default remove