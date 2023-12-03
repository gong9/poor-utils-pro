import fs from 'fs-extra'

export async function isExists(path: string) {
    return await fs.pathExists(path)
}

export async function move(srcPath: string, path: string) {
    if (await isExists(path)) {
        console.warn('The file already exists, please delete it first')
        return
    }

    try {
        await fs.move(srcPath, path)
        console.warn('success!')
    }
    catch (err) {
        console.error(err)
    }
}