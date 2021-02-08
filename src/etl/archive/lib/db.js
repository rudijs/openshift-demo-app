exports.query = async (pgtools, config, pool) => {
  console.log(config)
  try {
    console.log("dropz")
    let res = await pool.query("CREATE DATABASE api")
    // let res = await pgtools.createdb(
    //   {
    //     user: "postgres",
    //     password: "password",
    //     port: 5432,
    //     host: "localhost",
    //   },
    //   "api"
    // )
    console.log("res", res)

    console.log("create")

    // return res
    return 101
  } catch (e) {
    console.log(e)
    return e
  }
}
