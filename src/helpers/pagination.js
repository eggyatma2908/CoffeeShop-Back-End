const { countTypeProduct } = require('../models/products')

exports.pagination = async (limit, page, endpoint, table, typeProduct) => {
  const users = await countTypeProduct(typeProduct)
  console.log('type product', typeProduct)
  let totalData = users[0].totalData

  const totalPage = Math.ceil(totalData / limit)
  const setPagination = {
    totalData,
    totalPage,
    currentPage: page,
    perPage: limit,
    prevPage: page > 1 ? `${process.env.BASE_URL}/v1/${endpoint}?page=${parseInt(page) - 1}&limit=${limit}` : null,
    nextPage: page < totalPage ? `${process.env.BASE_URL}/v1/${endpoint}?page=${parseInt(page) + 1}&limit=${limit}` : null,
  }
  return setPagination
}
