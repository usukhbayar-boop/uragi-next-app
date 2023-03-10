import Layout from '@/components/layout/Layout';
import Link from 'next/link';

export default function Register() {
    return (
        <>
            <Layout
                headerLayout={11}
                logo="logo-flat"
            >
                <section className="overflow-hidden h-screen md:h-auto md:mt-112 sm:mt-80">
                    <div className="row x-gap-120 h-1/1 items-center">
                        <div className="col-lg-6 h-1/1 relative md:h-300">
                            <div className="bg-image absolute-full-center md:bg-pos-top js-lazy" style={{ backgroundImage: 'url("/img/forms/bg.png")' }} />
                            <div className="pl-60 md:pl-0 absolute-full-center z-2">
                                <div className="pl-120 lg:pl-48 md:pl-0 pt-120 md:pt-100">
                                    <div className="pt-120 md:pt-0">
                                        <div className="md:container sm:w-screen">
                                            <h1 className="text-4xl md:text-3xl text-white">Get started with<br /> Sassio</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="md:container py-48">
                                <h1 className="text-4xl md:text-3xl">Бүртгүүлэх</h1>
                                <p className="mt-16">Бүртгэлтэй юу? <Link className="decoration-none text-accent fw-600" href="/login">Энд дарж нэвтэрнэ үү</Link></p>
                                <form className="contact-form row y-gap-32 pt-48" action="#">
                                    <div className="col-12">
                                        <input type="text" name="name" placeholder="User Name" />
                                    </div>
                                    <div className="col-12">
                                        <input type="email" name="email" placeholder="Email Address" />
                                    </div>
                                    <div className="col-12">
                                        <input type="password" name="password" placeholder="Password" />
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" name="submit" id="submit" className="button -md -accent -uppercase text-white">
                                            Register
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}