import React from 'react'
import TeamMemberCard from '@/components/TeamMemberCard';
import TeamData from '@/data/ourTeam'


const OurTeam = () => {

    return (
        <section className='primary-section pt-16 overflow-hidden'>
            <section
                className='container max-w-screen-xl grid md:grid-cols-2 gap-5 md:grid-rows-6'


            >
                <div className='md:row-span-1'>
                    <h2 className="uppercase text-main-primary font-medium pb-4 text-xl text-center lg:text-start" style={{ letterSpacing: '7px' }}>our team</h2>
                    <h3 className="text-3xl font-bold pb-7 capitalize text-center lg:text-start"> meet our <br /> team members</h3>
                </div>
                {
                    TeamData.map((teamMember, ind) => {
                        return (
                            <TeamMemberCard key={ind} name={teamMember.name} title={teamMember.title} image={teamMember.image} cardInd={ind} />
                        )
                    })
                }

            </section>
        </section>
    )
}

export default OurTeam