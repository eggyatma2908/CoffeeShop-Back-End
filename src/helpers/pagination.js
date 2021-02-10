const { countAmountDataUsers } = require('../models/users')

exports.pagination = async (limit, page, endpoint, table, totalTypeProduct) => {
  const users = await countAmountDataUsers(table)
  console.log('totalTypeProduct', totalTypeProduct)
  let totalData = users[0].totalData
  if (totalTypeProduct) {
    totalData = totalTypeProduct
  }

  const totalPage = Math.ceil(totalData / limit)
  const setPagination = {
    totalData: totalData,
    totalPage,
    currentPage: page,
    perPage: limit,
    prevPage: page > 1 ? `${process.env.BASE_URL}/v1/${endpoint}?page=${parseInt(page) - 1}&limit=${limit}` : null,
    nextPage: page <= totalPage ? `${process.env.BASE_URL}/v1/${endpoint}?page=${parseInt(page) + 1}&limit=${limit}` : null,
  }
  return setPagination
}