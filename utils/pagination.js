exports.paginate = (items, page = 1, limit = 10) => {
    const start = (page - 1) * limit;
    const end = start + limit;
    return {
      total: items.length,
      page,
      limit,
      data: items.slice(start, end),
    };
  };
  