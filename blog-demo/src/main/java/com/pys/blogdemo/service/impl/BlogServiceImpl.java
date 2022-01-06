package com.pys.blogdemo.service.impl;

import com.pys.blogdemo.entity.Blog;
import com.pys.blogdemo.mapper.BlogMapper;
import com.pys.blogdemo.service.BlogService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author pys
 * @since 2021-11-13
 */
@Service
public class BlogServiceImpl extends ServiceImpl<BlogMapper, Blog> implements BlogService {

}
