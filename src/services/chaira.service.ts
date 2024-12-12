export const getChaira = async (): Promise<'OK' | 'ERROR'> => {
  return new Promise(resolve => {
    const random = Math.floor(Math.random() * 100) + 1
    console.log(random)

    resolve(random % 2 === 0 ? 'OK' : 'ERROR')
  })
}
