import {
  Controller,
  Get,
  Post,
  Render,
  Req,
  Res,
  UseFilters,
  UseGuards
} from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';
import { LoginGuard } from './common/guards/login.guard';
import { AuthenticatedGuard } from './common/guards/authenticated.guard';
import { AuthExceptionFilter } from './common/filters/auth-exception.filter';

@Controller()
@UseFilters(AuthExceptionFilter)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Render('login')
  index(
    @Req() req: Request,
  ): { message: string[] } {
    return { message: req.flash('loginError') };
  }

  @UseGuards(LoginGuard)
  @Post('/login')
  login(
    @Res() res: Response,
  ): void {
    res.redirect('/home');
  }

  @UseGuards(AuthenticatedGuard)
  @Get('/home')
  @Render('home')
  getHome(
    @Req() req: Request,
  ): { user: any } {
    const { user } = req;
    return { user };
  }
  
  @UseGuards(AuthenticatedGuard)
  @Get('/profile')
  @Render('profile')
  getProfile(
    @Req() req: Request,
  ): { user: any } {
    const { user } = req;
    return { user };
  }

  @Get('/logout')
  logout(
    @Req() req: Request,
    @Res() res: Response,
  ): void {
    req.logOut((err) => console.log(err));
    res.redirect('/');
  }
}
