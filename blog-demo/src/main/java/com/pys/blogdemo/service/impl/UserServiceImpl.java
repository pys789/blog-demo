package com.pys.blogdemo.service.impl;

import com.pys.blogdemo.entity.User;
import com.pys.blogdemo.mapper.UserMapper;
import com.pys.blogdemo.service.UserService;
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
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService {

}
